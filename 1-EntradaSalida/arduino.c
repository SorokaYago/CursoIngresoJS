#define LED0 12
#define PUSHBUTTON0 10

void setup() {
  pinMode(LED0, OUTPUT);
  pinMode(PUSHBUTTON0, INPUT);
}

void loop()
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
}