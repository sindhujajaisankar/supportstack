class Changecoltostaffadmin < ActiveRecord::Migration
  def up
  rename_column :staff_admins,:user_id,:alluser_id
  end

  def down
  end
end
