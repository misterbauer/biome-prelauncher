Rails.application.routes.draw do
  devise_for :admins
  resources :prizes, except: :show
  resources :settings, only: [:create, :update, :index]

  resources :users, only: [:index, :create, :show, :destroy] do
    resources :shares, only: [] do
      collection do
        get "/" => "shares#create"
      end
    end
  end

  root "users#new"
  get "terms" => "pages#terms"

  get "*path", to: redirect('/') #redirects all errors to root
end
