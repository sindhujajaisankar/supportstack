class CreateStaffAdmins < ActiveRecord::Migration
  def change
    create_table :staff_admins do |t|
	t.integer :user_id
	t.integer :department_id
	t.integer :priveleges
	t.integer :ticket_notifier
      t.timestamps
    end
  end
end
