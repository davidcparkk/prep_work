Rails.application.routes.draw do
  resources :ping, :defaults => { :format => :json}
end
