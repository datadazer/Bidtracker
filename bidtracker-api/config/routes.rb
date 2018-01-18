Rails.application.routes.draw do
  post '/token', to: 'tokens#create'
  resources :users, only: [:index]
  resources :bids
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
