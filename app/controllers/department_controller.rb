class DepartmentController < ApplicationController
	before_filter :authenticate_alluser!
	before_filter:auth_admin
layout "aa"
def new
if alluser_signed_in?
if current_alluser.role_id == 1
@dep=Department.new
else
redirect_to '/allusers/sign_in'
end
else
redirect_to '/allusers/sign_in'
end
end
def create
d=Department.create(params[:department])
if  d.valid?
	   d.save
else
		@error=d.errors.messages
		@dep=Department.new
		render :action=>"new"		
	end	
end
def managedep
@dep=Department.all
@user=Alluser.all
end
def destroy
	@dep=Department.find_by_id(params[:id])
  @dep.destroy
redirect_to '/department/managedep'
end
def edit
	@dep=Department.find_by_id(params[:id])
end
def update
	@dep=Department.find_by_id(params[:id])
	p  11111111111111111111111111
	p @dep
	@dep.update_attributes(params[:department])
  redirect_to '/department/managedep'    
  
end


def auth_admin
               if (!(current_alluser.role.name=="admin"))
                          redirect_to"/allusers/sign_in"
                                       end
                       end

end

