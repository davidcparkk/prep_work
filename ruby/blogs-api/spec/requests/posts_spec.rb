require 'rails_helper'

RSpec.describe 'Posts API', type: :request do

  # let!(:posts) { create_list(:post, 10) }

  describe 'GET /api/posts with invalid tags parameter' do
    # make HTTP get request before each example
    before { get '/api/posts' }
    it 'returns status code 400' do
      expect(response).to have_http_status(400)
    end
    
    
  end
  
  describe 'GET /api/posts?query with valid tags parameter' do
    before { get '/api/posts?tags=' }

    it 'returns posts' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/posts?query with valid tag, direction, and sortBy parameters' do
    before { get '/api/posts?tags=tech&direction=asc&sortBy=popularity' }

    it 'returns posts' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/posts?query with multiple valid tag parameters separated by comma' do
    before { get '/api/posts?tags=tech,history' }

    it 'returns posts' do
      expect(json).not_to be_empty
      expect(json.size).to eq(1)
    end

    it 'contains no duplicates' do
      expect(json['posts']).to eq(json['posts'].uniq)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET /api/posts with invalid direction parameter' do
    before { get '/api/posts?tags=&direction=error' }

    it 'returns status code 400' do
      expect(response).to have_http_status(400)
    end
  end

  describe 'GET /api/posts with invalid sortBy parameter' do
    before { get '/api/posts?tags=&sortBy=error' }

    it 'returns status code 400' do
      expect(response).to have_http_status(400)
    end
  end

end