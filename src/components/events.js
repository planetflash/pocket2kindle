const events = {
  clipboard: {
    onCopy: null,
    onCut: null,
    onPaste: null
  },
  composition: {
    onCompositionEnd: null,
    onCompositionStart: null,
    onCompositionUpdate: null
  },
  keyboard: {
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null
  },
  mouse: {
    onClick: null,
    onContextMenu: null,
    onDoubleClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null
  },
  touch: {
    onTouchCancel: null,
    onTouchEnd: null,
    onTouchMove: null,
    onTouchStart: null
  },
  focus: {
    onFocus: null,
    onBlur: null
  },
  selection: {
    onSelect: null
  },
  ui: {
    onScroll: null
  },
  wheel: {
    onWheel: null
  },
  media: {
    onAbort: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onDurationChange: null,
    onEmptied: null,
    onEncrypted: null,
    onEnded: null,
    onError: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onProgress: null,
    onRateChange: null,
    onSeeked: null,
    onSeeking: null,
    onStalled: null,
    onSuspend: null,
    onTimeUpdate: null,
    onVolumeChange: null,
    onWaiting: null
  },
  form: {
    onChange: null,
    onInput: null,
    onInvalid: null,
    onSubmit: null
  },
  image: {
    onLoad: null,
    onError: null
  },
  animation: {
    onAnimationStart: null,
    onAnimationEnd: null,
    onAnimationIteration: null
  },
  transition: {
    onTransitionEnd: null
  },
  other: {
    onToggle: null
  }
};

export default events;
