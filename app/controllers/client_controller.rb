class ClientController < ApplicationController
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
@a=Alluser.new(params[:alluser])
@c=Client.create(params[:client])
@a.role=Role.find_by_name("client")
password=((0..7).map{ rand(36).to_s(36) }.join)
@a.password=password
if (@a.save)
@a.save
@c.alluser_id=@a.id
@c.save
email_id=@a.email
user=@a.username
Email.send_email(user,email_id,password).deliver
else
	@error=@a.errors.messages
	render :action=>"new"
end
end
def manageclient
	if alluser_signed_in?
if current_alluser.role_id == 1
	@client=Client.all
@user=Alluser.all
else
redirect_to '/allusers/sign_in'
end
else
redirect_to '/allusers/sign_in'
end
end
def destroy
	@client=Client.find_by_id(params[:id])
  @client.destroy
redirect_to '/client/manageclient'
end
def edit
	@client=Client.find_by_id(params[:id])
	@user=Alluser.find_by_id(params[:id])
end
def update
	@client=Client.find_by_id(params[:id])
	@user=Alluser.find_by_id(params[:id])
	if(@user.update_attributes(params[:alluser]))
		@client.update_attributes(params[:client])
	else
		@error=@user.errors.messages
		@client=Client.find_by_id(params[:id])
	  @user=Alluser.find_by_id(params[:id])
	render :action=>"edit"
	end
	end
def auth_admin
               if (!(current_alluser.role.name=="admin"))
                          redirect_to"/allusers/sign_in"
                                       end
                       end
end
