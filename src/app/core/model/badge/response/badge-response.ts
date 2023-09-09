import {BadgeNivelResponse} from "../../badgeNivel/response/badge-nivel-response";

export class BadgeResponse {
  id: number = 0;
  descricao: string = '';
  imagem: string = '';
  nomeArquivo: string = '';
  status: number = 0;
  badgeNivelId: number = 0;
  badgeNivel: BadgeNivelResponse = new BadgeNivelResponse();
}
