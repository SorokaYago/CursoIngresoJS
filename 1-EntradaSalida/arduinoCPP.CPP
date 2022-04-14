#define LED0 12
#define PUSHBUTTON0 10

int pullUP;

void setup() {
  pinMode(LED0, OUTPUT);
  pinMode(PUSHBUTTON0, INPUT);
  Serial.begin(9600); //importante llamar a la consola
}

void loop(){
pullUP = digitalRead(PUSHBUTTON0);
Serial.print("1st Pull Up State: ");
Serial.println(pullUp);

if(pullUP == LOW) {
  digitalWrite(LED0, HIGH);
  delay(500); // Wait for 500 millisecond(s)
  digitalWrite(LED0, LOW);
  delay(500); // Wait for 500 millisecond(s)
}
}