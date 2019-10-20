require 'net/http'
require 'cgi'

class Api::PostsController < ApplicationController
  SORT_BY = {"id": true, "reads": true, "likes": true, "popularity": true}
  DIRECTION = {"asc": true, "desc": true}

  def index
    request_params = request.query_parameters
    
    if request_params[:tags]
        tags = request_params[:tags].split(',')
    else
      render json: {error:"Tags parameter is required"}, status: 400
      return
    end

    sortBy = request_params[:sortBy]
    direction = request_params[:direction]
    result = {'posts': []}

      
    if tags
      tags.each do |tag|
        url = URI.parse("https://hatchways.io/api/assessment/blog/posts?tag=#{tag}")
        req = Net::HTTP::Get.new(url.to_s)
        http = Net::HTTP.new(url.host, url.port)
        http.use_ssl = (url.scheme == "https")
        response = http.request(req)
        response = JSON.parse(response.body)
        result[:posts].concat(response['posts'])
      end

      result[:posts] = result[:posts].uniq

      if direction && DIRECTION[direction.to_sym] != true
        render json: {error:"Direction parameters not valid"}, status: 400
        return
      elsif !direction
        direction = "asc"
      end

      
      if sortBy && SORT_BY[sortBy.to_sym] != true
        render json: {error: "SortBy parameters not valid"}, status: 400
        return
      elsif !sortBy
        sortBy = "id"
      end

      if direction == "asc"
        sorted = result[:posts].sort_by {|obj| obj[sortBy] }
        result[:posts] = sorted
      elsif direction == "desc"
        sorted = result[:posts].sort_by {|obj| obj[sortBy] }.reverse
        result[:posts] = sorted
      end

    end

    json_response(result)

  end

end
