class CreatePings < ActiveRecord::Migration[5.2]
  def change
    create_table :pings do |t|
      t.boolean :success

      t.timestamps
    end
  end
end
