class CreateDepartments < ActiveRecord::Migration
  def change
    create_table :departments do |t|
	t.string :name
	t.string :description
	t.string :email_id
	t.integer :phone_number
	t.string :fax
      t.timestamps
    end
  end
end
