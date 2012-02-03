class DeviseCreateAllusers < ActiveRecord::Migration
  def change
    create_table(:allusers) do |t|
      t.database_authenticatable :null => false
      t.recoverable
      t.rememberable
      t.trackable

      # t.encryptable
      # t.confirmable
      # t.lockable :lock_strategy => :failed_attempts, :unlock_strategy => :both
      # t.token_authenticatable


      t.timestamps
    end

    add_index :allusers, :email,                :unique => true
    add_index :allusers, :reset_password_token, :unique => true
    # add_index :allusers, :confirmation_token,   :unique => true
    # add_index :allusers, :unlock_token,         :unique => true
    # add_index :allusers, :authentication_token, :unique => true
  end

end
