class StaffdashboardController < ApplicationController
	before_filter :authenticate_alluser!
layout "ss"

def index
redirect_to 'home/homedash'
end
def new
	@open=Ticket.where(:status=>"open", :alluser_id=>current_alluser.id).count
	@pending=Ticket.where(:status=>"pending",:alluser_id=>current_alluser.id).count
	@completed=Ticket.where(:status=>"completed",:alluser_id=>current_alluser.id).count
end
def edit
if alluser_signed_in?
if current_alluser.role_id == 3
@user=current_alluser.id
@staff=StaffAdmin.find_by_alluser_id(@user)
@user=@staff.alluser
@dep=@staff.department
else
redirect_to '/allusers/sign_in'
end
else
redirect_to '/allusers/sign_in'
end
end

def update
@user=current_alluser.id
@staff=StaffAdmin.find_by_alluser_id(@user)	
@user=@staff.alluser
@dep=@staff.department
if(@user.update_attributes(params[:alluser]))
@staff.update_attributes(params[:staffadmin])
else
	@error=@user.errors.messages
	@user=current_alluser.id
@staff=StaffAdmin.find_by_alluser_id(@user)	
@user=@staff.alluser
@dep=@staff.department
render :action=>"edit"
end
end
end
