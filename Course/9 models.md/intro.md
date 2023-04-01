Do not create User model .... it gives errors on the mongoose  part .... 



Always check if there's an instance of the the model running before creating a new instance  .... then you export ... 

example ...

# const Item = models.Item || model("Item", itemSchema) 
# module.exports = Item


