class Gremlin < ApplicationRecord
    belongs_to :city, optional: true
end
