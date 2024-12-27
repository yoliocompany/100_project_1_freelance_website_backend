const express = require('express');

const { createProposal, getProposalsByServiceId , getProposalsByUserId , deleteProposal, acceptProposal } = require('../controllers/proposal.controller');

const router = express.Router();



router.post('/create' , createProposal);
router.get('/service/:id' , getProposalsByServiceId);
router.get('/my/:id' , getProposalsByUserId);
router.delete('/:id' , deleteProposal);
router.put('/:id' , acceptProposal);




module.exports = router;