Rails.application.routes.draw do
  get 'home/index'
  get "/pages/:page" => "pages#show"

  root 'home#index'
end
