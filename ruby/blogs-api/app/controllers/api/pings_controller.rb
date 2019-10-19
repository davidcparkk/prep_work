class Api::PingsController < ApplicationController

  def show
    @ping = {success: true}
    json_response(@ping)
  end

end
