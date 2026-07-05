import React from 'react'
import { Modal, Button } from 'evm-ui'

// The overlay is position:fixed; a transformed wrapper makes it anchor to this
// box (not the page viewport) so the whole dialog is captured in the card.
const Stage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      position: 'relative',
      transform: 'translateZ(0)',
      width: 560,
      height: 320,
      background: 'var(--evm-bg)',
      borderRadius: 8,
      overflow: 'hidden',
    }}
  >
    {children}
  </div>
)

export const Confirm = () => (
  <Stage>
    <Modal
      open
      title="Delete address book?"
      onClose={() => {}}
      footer={
        <>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Delete permanently</Button>
        </>
      }
    >
      Deleting <strong>Cold Storage</strong> removes all 12 addresses. This cannot be undone.
    </Modal>
  </Stage>
)
