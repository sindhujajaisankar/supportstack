class EditadminController < ApplicationController
	before_filter :authenticate_alluser!
	before_filter:auth_admin
layout "aa"

def homedash
	
		@staff=StaffAdmin.all.count
		@client=Client.all.count
		@open=Ticket.find_all_by_status("open").count
		@pending=Ticket.find_all_by_status("pending").count
end
def edit
if alluser_signed_in?
if current_alluser.role_id == 1
@user=Alluser.find_by_role_id(1)
else
redirect_to '/allusers/sign_in'
end
else
redirect_to '/allusers/sign_in'
end
#@user=Alluser.find_by_role_id(1)
end

def update
	@user=Alluser.find_by_role_id(1)
	@user.update_attributes(params[:alluser])
	if @user.valid?
		@user.save
		else 
			@error=@user.errors.messages
			@user=Alluser.find_by_role_id(1)
			render :action=>"edit"
			end
		end
		
		
		def auth_admin
               if (!(current_alluser.role.name=="admin"))
                          redirect_to"/allusers/sign_in"
                                       end
                       end
		
		
end
