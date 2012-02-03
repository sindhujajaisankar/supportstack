class Email < ActionMailer::Base
  default :from => "sindhuja@railsfactory.org"
  def send_email(user,email_id,password)
     @user=user
     @email_id=email_id
     @password=password
      mail(:to=>"<#{email_id}>",:subject=>"Account have been successfully activated")
    end
end
