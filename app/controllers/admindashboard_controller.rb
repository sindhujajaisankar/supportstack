class AdmindashboardController < ApplicationController
	before_filter :authenticate_alluser!
layout "aa"
def new
	redirect_to '/editadmin/homedash'		
	end	
end
