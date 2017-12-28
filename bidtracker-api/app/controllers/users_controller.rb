class UsersController < ApplicationController
  # before_filter :authenticate_request!, :except=>[:new, :create]
  before_action :authenticate_request!, :except=>[:index]

  def index
    users = User.all
    render json: users
  end

  private

  def authenticate_request!
    if valid_token?
      @current_user = User.find(auth_token[:user_id])
    else
      render json: {}, status: :unauthorized
    end
  rescue JWT::VerificationError, JWT::DecodeError
    render json: {}, status: :unauthorized
  end

  private

  def valid_token?
    puts request.headers['Authorization'].present?
    request.headers['Authorization'].present? && auth_token.present?
  end

  def auth_token
    @auth_token ||= JsonWebTokenService.decode(request.headers['Authorization'].split(' ').last)
  end
end
