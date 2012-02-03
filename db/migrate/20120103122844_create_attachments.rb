class CreateAttachments < ActiveRecord::Migration
  def up
    create_table :attachments do |t|
	t.integer :attachable_id
	t.string :attachable_type
	 t.has_attached_file :avatar
      t.timestamps
    end
end
def down
drop_attached_file :attachments, :avatar
end

  
end
