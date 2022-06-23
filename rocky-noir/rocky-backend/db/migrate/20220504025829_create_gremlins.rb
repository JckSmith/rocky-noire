class CreateGremlins < ActiveRecord::Migration[6.1]
  def change
    create_table :gremlins do |t|
      t.string :name
      t.string :species
      t.string :color
      t.string :earType
      t.string :tailType
      t.string :eyeColor
      t.integer :satisfaction
      t.integer :hunger

      t.timestamps
    end
  end
end
