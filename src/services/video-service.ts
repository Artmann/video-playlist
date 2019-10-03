import { JSONRPCClient } from "json-rpc-2.0";

export default class VideoService {
  private rpcClient : JSONRPCClient;

  constructor() {
    this.rpcClient = new JSONRPCClient(
      (jsonRPCRequest) =>
        fetch('https://video-playlist-video-service.herokuapp.com/json-rpc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(jsonRPCRequest)
        }).then(response => {
          if (response.status === 200) {
            // Use client.receive when you received a JSON-RPC response.
            return response.json().then(jsonRPCResponse => this.rpcClient.receive(jsonRPCResponse));
          } else if (jsonRPCRequest.id !== undefined) {
            return Promise.reject(new Error(response.statusText));
          }
        })
    );
  }

  async getVideoId(title: string, artists: string[]): Promise<string | undefined> {
    const { video, stats } = await this.rpcClient.request('findVideo', [ title, ...artists ]);
    const { id } = video;

    console.log('RPC: findVideo', video, stats);

    return id;
  }
}
