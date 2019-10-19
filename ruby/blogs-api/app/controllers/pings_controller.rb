class PingsController < ApplicationController
  # before_action :set_ping, only: [:show]

  def index
    @pings = Ping.all
    json_response(@pings)
  end

  def show
    render {success: true}
  end

  private
  # def set_ping
  #   # @ping = Ping.find(params[:id])
  #   @ping = {success: true}
  #   # if params[:id]
  # end
end
