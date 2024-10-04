// controlar as rotas da nossa api
import fastify, { FastifyInstance , FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify"

export async function routers( fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (request:FastifyRequest, reply:FastifyReply)=>{
        return {ok: true}
    })
}