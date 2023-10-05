import express from "express";
import { 
    getQnA,
    getJawab,
    getAllQnA,
    createTanya,
    createJawab
} from "../controller/tanyaController.js";

const router = express.Router();

router.get('/test', getJawab);
router.get('/utama', getQnA);
router.get('/qna', getAllQnA);
router.post('/qna/add',createTanya);
router.post('/qna/jawaban',createJawab);

export default router;