module ecole {
    export class Personne {
        private _nom:String;
        private _prenom:String;
        private _genre:String;
        private _age:number;
        private _taille:number;
        private _poids:number;


        constructor(nom: String, prenom: String, genre: String, age: number, taille: number, poids: number) {
            this._nom = nom;
            this._prenom = prenom;
            this._genre = genre;
            this._age = age;
            this._taille = taille;
            this._poids = poids;
        }


        get nom(): String {
            return this._nom;
        }

        set nom(value: String) {
            this._nom = value;
        }

        get prenom(): String {
            return this._prenom;
        }

        set prenom(value: String) {
            this._prenom = value;
        }

        get genre(): String {
            return this._genre;
        }

        set genre(value: String) {
            this._genre = value;
        }

        get age(): number {
            return this._age;
        }

        set age(value: number) {
            this._age = value;
        }

        get taille(): number {
            return this._taille;
        }

        set taille(value: number) {
            this._taille = value;
        }

        get poids(): number {
            return this._poids;
        }

        set poids(value: number) {
            this._poids = value;
        }
    }

    export class Cours {
        private _subject:String

        constructor(subject: String) {
            this._subject = subject;
        }

        get subject(): String {
            return this._subject;
        }

        set subject(value: String) {
            this._subject = value;
        }
    }

    export class Etudiant extends Personne {
        private _promotion:String

        constructor(nom: String, prenom: String, genre: String, age: number, taille: number, poids: number, promotion: String) {
            super(nom, prenom, genre, age, taille, poids);
            this._promotion = promotion;
        }

        get promotion(): String {
            return this._promotion;
        }

        set promotion(value: String) {
            this._promotion = value;
        }
    }

    export class Formateur extends Personne {
        private _listCours:Cours[];

        constructor(nom: String, prenom: String, genre: String, age: number, taille: number, poids: number , list:Cours[]) {
            super(nom, prenom, genre, age, taille, poids);
            this._listCours = list;
        }

        get listCours(): Cours[] {
            return this._listCours;
        }

        set listCours(value: Cours[]) {
            this._listCours = value;
        }

        public sePresenter(){
            let pres =  "Je suis " + this.nom + " " + this.prenom + " et de dispense les cours de ";
            for (let i = 0; i < this.listCours.length; i++) {
                if(this.listCours[i] != null) pres += `<br>` + this.listCours[i].subject;
            }
            return pres;
        }
    }
}
let cours = [new ecole.Cours("Philosopie"),new ecole.Cours("Français"),new ecole.Cours("Sociologie")]
let jhonDoe = new ecole.Formateur("Jhon","Doe","H",45,183,72,cours);

document.querySelector("#pres-format").innerHTML = `<p>` + jhonDoe.sePresenter() +`</p>`;