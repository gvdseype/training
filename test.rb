class Ancestors

  attr_reader :bob
  
  def initialize
    @bob = self
  end

	def self.hello
    self.new.hello
  end
end

class Humans < Ancestors
  def hello
    "ancestors class"
  end
end

class Persons < Humans
  def who_am_i
    puts "I am the #{bob.class.hello}" 
    # I am the ancestors class
    # self.class - Persons
    # Persons.bob(self)
  end
 
end

bob = Persons.new
bob.who_am_i