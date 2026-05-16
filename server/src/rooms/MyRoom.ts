import { Client, Room } from '@colyseus/core'
import { MyRoomState } from './schema/MyRoomState'

export class MyRoom extends Room {
  maxClients = 4

  onCreate(options: any) {
    this.setState(new MyRoomState())

    this.onMessage('type', (client, message) => {
      //
      // handle "type" message
      //
    })
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, 'joined!')
  }

  onLeave(client: Client, code: number) {
    const consented = code === 1000
    console.log(client.sessionId, `left! (Intentional/Consented: ${consented})`)
  }

  onDispose() {
    console.log('room', this.roomId, 'disposing...')
  }
}