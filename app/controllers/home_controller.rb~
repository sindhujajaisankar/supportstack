class HomeController < ApplicationController
	
before_filter :authenticate_alluser!
def index
	if current_alluser.role_id== 1
	redirect_to '/admindashboard/new'
	else if current_alluser.role_id== 3
		redirect_to '/staffdashboard/new'
        else
                redirect_to '/clientdashboard/new'
	end
end
end
end
