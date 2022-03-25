/**
 * Xpra Typescript Client
 * @link https://github.com/andersevenrud/xpra-html5-client
 * @author Anders Evenrud <andersevenrud@gmail.com>
 * @license Mozilla Public License Version 2.0
 *
 * ---
 *
 * Based on original Xpra source
 * @copyright Copyright (C) 2016-2022 Antoine Martin <antoine@devloop.org.uk>
 * @license Licensed under MPL 2.0, see: http://www.mozilla.org/MPL/2.0/
 * @link https://github.com/Xpra-org/xpra-html5
 */

import { XpraWorker } from '../io/worker'
import { XpraWorkerData } from '../types'

/* istanbul ignore file */

/**
 * Web worker instance.
 */
export class XpraWebWorker extends XpraWorker {
  init() {
    self.addEventListener('message', (ev: MessageEvent) => {
      const [cmd, data] = ev.data
      this.processMessage(cmd, data)
    })
  }

  protected send(cmd: string, data: XpraWorkerData) {
    self.postMessage([cmd, data])
  }
}
