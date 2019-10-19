class PingController < ApplicationController
  def index
    @ping = {success: true}
    json_response(@ping)
  end
end
