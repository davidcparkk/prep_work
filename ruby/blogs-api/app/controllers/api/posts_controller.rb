require 'net/http'

class Api::PostsController < ApplicationController
  SORT_BY = {"id": true, "reads": true, "likes": true, "popularity": true}
  DIRECTION = {"asc": true, "desc": true}

  def index
      request_params = request.query_parameters
      tags = request_params[:tag]
      sortBy = request_params[:sortBy]
      direction = request_params[:direction]
    if !tags
      url = URI.parse('https://hatchways.io/api/assessment/blog/posts')
      req = Net::HTTP::Get.new(url.to_s)
      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = (url.scheme == "https")
      response = http.request(req)
      json_response(response.body)
    elsif tags

      # if params[:sortBy]
      #   sortBy = params[:sortBy]
      # else
      #   sortBy = "id"
      # end

      # if params[:direction]
      #   direction = params[:direction]
      # else
      #   direction = "asc"
      # end

      url = URI.parse("https://hatchways.io/api/assessment/blog/posts?tag=#{tags}&sortBy=#{sortBy}&direction=#{direction}")
      req = Net::HTTP::Get.new(url.to_s)
      http = Net::HTTP.new(url.host, url.port)
      http.use_ssl = (url.scheme == "https")
      response = http.request(req)
      response = JSON.parse(response.body)

      

      if direction == "asc"
        sorted = response['posts'].sort_by {|obj| obj[:id] }
        response['posts'] = sorted
      elsif direction == "desc"
        sorted = response['posts'].sort_by {|obj| obj[:id] }.reverse
        response['posts'] = sorted
      end

      # if sortBy && SORT_BY[sortBy] 
        
      # end
    end

    # response.body
    json_response(response)
    # json_response(request_params)
    # render :text => response.inspect

  end

  private
  def posts_params
    params.require(:post).permit(:direction, :sortBy)
  end
end
