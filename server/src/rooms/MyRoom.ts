import { Client, Room } from '@colyseus/core'
import { MyRoomState } from './schema/MyRoomState'

export class MyRoom extends Room<MyRoomState> {
  maxClients = 4
  state = new MyRoomState()

  onCreate(options: any) {
    this.onMessage('type', (client, message) => {
      //
      // handle "type" message
      //
    })
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, 'joined!')
  }

  // Changed 'consented: boolean' to 'code: number' to match Colyseus types
  onLeave(client: Client, code: number) {
    const consented = code === 1000
    console.log(client.sessionId, `left! (Intentional/Consented: ${consented})`)
  }

  onDispose() {
    console.log('room', this.roomId, 'disposing...')
  }
}