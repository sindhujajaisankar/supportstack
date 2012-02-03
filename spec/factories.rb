include ActionDispatch::TestProcess


Factory.define :department do |a|
 a.name "order"
 a.description "this is order department"
 a.email_id "order@gmail.com"
 a.phone_number "044-22324345"
 a.fax "9988776655"
end