const express = require('express'); 
const router = express.Router(); 

const Hotel=require("../models/Hotel")
// afficher la liste des articles.
router.get('/', async (req, res, )=> { 
 try { 
 const hotels = await Hotel.find();
 console.log(hotels) 
 
 res.status(200).json(hotels); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// créer un nouvel article
router.post('/', async (req, res) => { 
 
 const nv = new Hotel(req.body) 
 try { 
 await nv.save(); 
 res.status(200).json(nv); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// chercher un article
router.get('/:_id/',async(req, res)=>{ 
 try { 
 const h = await Hotel.findById(req.params._id); 
 
 res.status(200).json(h); 
 } catch (error) { 
    console.log(error);
 res.status(404).json({ message: error.message }); 
 } 
}); 
// modifier un article
router.put('/:_id /', async (req, res)=> { 
 const { reference, 
designation,prix,place,etat,imageart} = req.body; 
 const ObjectId  = req.params._id ; 
 try { 
 

 const hot1 = { 
reference:reference,designation:designation,prix:prix,marque:marque,qte,
stock:qtestock,imageart:imageart,id:_id  }; 
 await Hotel.findByIdAndUpdate(reference, hot1); 
 res.json(hot1); 
 } catch (error) { 
 res.status(404).json({ message: error.message }); 
 } 
}); 
// Supprimer un article
router.delete('/:_id/', async (req, res)=> { 
 const _id = req.params._id ; 
 await Hotel.findByIdAndDelete(_id ); 
 res.json({ message: "The hotel deleted successfully." }); 
}); 
module.exports = router; 
