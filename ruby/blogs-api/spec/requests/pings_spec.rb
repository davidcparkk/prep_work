require 'rails_helper'

RSpec.describe 'Pings API', type: :request do
  # initialize test data 
  let!(:pings) { create_list(:ping, 1) }
  

  # Test suite for GET /todos
  describe 'GET /ping' do
    # make HTTP get request before each example
    before { get '/api/ping' }

    it 'returns ping' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

end