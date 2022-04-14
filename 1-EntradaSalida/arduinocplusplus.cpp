/*
#define PULSADOR 10
//#define PULSADOR2 2
#define LED 12
//#define LED2 3

void setup() {
    pinMode (LED, OUTPUT); 
    //pinMode (LED2, OUTPUT); 
    pinMode (PULSADOR, INPUT); //pull down resistencia abajo
    //pinMode (PULSADOR2, INPUT);
    Serial.begin(9600); //habilito el puerto serie
}


void loop() {
    int presionar = digitalRead(PULSADOR); // defino variable local para guardar state
    Serial.print("estadoUno: ");
    Serial.println(presionar);

    if(presionar == HIGH) { //pregunto por el estado
        digitalWrite(12, HIGH); //prendo
        delay(300);
        digitalWrite (12, LOW); // apago
        delay(300);
    }
    */

//6- Pulsadores(pull down -pull up) https://onlinegdb.com/CHrdN1uab
#define LED0 12
#define PUSHBUTTON0 10
#define LED1 7
#define PUSHBUTTON1 5

int pullDown;
int pullUp;

void setup(){
  pinMode(LED0, OUTPUT);
  pinMode(LED1, OUTPUT);
  pinMode(PUSHBUTTON0, INPUT);
  pinMode(PUSHBUTTON1, INPUT);
  Serial.begin(9600);
}

void loop(){
  pullDown = digitalRead(PUSHBUTTON0);
  Serial.print("1st State: ");
  Serial.println(pullDown);
  pullUp = digitalRead(PUSHBUTTON1);
  Serial.print("2nd State: ");
  Serial.println(pullUp);
  
  
  if(pullDown == HIGH) {
  digitalWrite(LED0, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(LED0, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
  }
  
  if(pullUp == LOW) {
  digitalWrite(LED1, HIGH);
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(LED1, LOW);
  delay(1000); // Wait for 1000 millisecond(s)
  }
}
