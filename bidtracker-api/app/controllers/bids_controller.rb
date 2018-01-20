class BidsController < ApplicationController
  def index
    bids = Bid.all
    render json: bids
  end

  def create
    bid = Bid.new(bid_params)
    if bid.save
      render json: bid, status: :created
    else
      render_error(bid, :unprocessable_entity)
    end
  end
  def bid_params
    ActiveModelSerializers::Deserialization.jsonapi_parse(params)
  end
end
