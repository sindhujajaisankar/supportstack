class StaffController < ApplicationController
  before_filter :authenticate_alluser!
  before_filter:auth_admin
layout "aa"
def new
if alluser_signed_in?
if current_alluser.role_id == 1
else
redirect_to '/allusers/sign_in'
end
else
redirect_to '/allusers/sign_in'
end
end
def create
@s=StaffAdmin.new(params[:staff_admin])
@u=Alluser.new(params[:alluser])
@u1=Role.find_by_name("staff")
@u.role_id=@u1.id
password=((0..7).map{ rand(36).to_s(36) }.join)
@u.password=password
	if (@u.save)
@u.save
@s.alluser_id=@u.id
@s.save
email_id=@u.email
user=@u.username
Email.send_email(user,email_id,password).deliver
else
   @error=@u.errors.messages
				
		 render :action=>"createstaff"
end
end
def managestaff
@dep=Department.all
@staff=StaffAdmin.all
@user=Alluser.all
end
def destroy
  @staff=StaffAdmin.find_by_id(params[:id])
  @staff.destroy
redirect_to '/staff/managestaff'
end
def edit
  @staff1=StaffAdmin.find_by_id(params[:id])
  @user1=Alluser.find_by_id(params[:id])  
end
def update
        @staff1=StaffAdmin.find_by_id(params[:id])
        @user1=Alluser.find_by_id(params[:id])  
       if(@user1.update_attributes(params[:alluser]))
      @staff1.update_attributes(params[:staff_admin])
   else
       @error=@user1.errors.messages
      @staff1=StaffAdmin.find_by_id(params[:id])
       @user1=Alluser.find_by_id(params[:id])  
      render :action=>"edit"
     end
end
def index 
      
    end 
    
    def auth_admin
               if (!(current_alluser.role.name=="admin"))
                          redirect_to"/allusers/sign_in"
                                       end
                       end
    
end
