import Animated from "../common/Animated";

const MyComponent = () => {
  return (
    <div style={{ padding: "20px" }}>
      {/* Using predefined animation by name */}
      <Animated animation="slideUp">
        <h1>Fades In</h1>
      </Animated>

      {/* With delay */}
      <Animated animation="slideUp" delay={0.3}>
        <p>Slides up with delay</p>
      </Animated>

      {/* Custom duration */}
      <Animated animation="slideLeft" duration={0.8} delay={0.5}>
        <div>Slower slide from left</div>
      </Animated>

      {/* As different element */}
      <Animated animation="scale" as="section" delay={0.7}>
        <div>Scales in as section element</div>
      </Animated>

      {/* Custom animation */}
      <Animated
        animation={{
          initial: { opacity: 0, scale: 1.5 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { type: "spring", stiffness: 100 },
        }}
        delay={1}
      >
        <div>Custom animation</div>
      </Animated>
    </div>
  );
};

export default MyComponent;
