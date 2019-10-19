Rails.application.routes.draw do
  namespace :api, defaults:{format: :json} do 
    resource :ping, only: [:show]
  end
end
