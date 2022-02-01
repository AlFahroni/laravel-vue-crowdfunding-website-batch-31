<?php
// Parent class
trait Hewan
{
    public $nama;
    public $darah = 50;
    public $jumlahKaki;
    public $keahlian;

    public function atraksi()
    {
        echo "{$this->nama} sedang {$this->keahlian}";
    }
}

trait Fight
{
    public $attackPower;
    public $defencePower;

    public function serang($lawan)
    {
        echo "{$this->nama} sedang menyerang {$lawan->nama}";
        echo PHP_EOL;
        $this->diserang($lawan);
    }

    public function diserang($lawan)
    {
        echo "{$lawan->nama} sedang diserang";
        $this->darah = $this->darah - ($lawan->attackPower / $this->defencePower);
    }
}

// Child classes
class ELang
{
    use Hewan, Fight;

    public function __construct($nama)
    {
        $this->nama = $nama;
        $this->jumlahKaki = 2;
        $this->keahlian = "terbang tinggi";
        $this->attackPower = 10;
        $this->defencePower = 5;
    }

    public function getInfoHewan()
    {
        echo "----Informasi Hewan----";
        echo PHP_EOL;
        echo "Nama = $this->nama";
        echo PHP_EOL;
        echo "Darah = $this->darah";
        echo PHP_EOL;
        echo "Jumlah Kaki = $this->jumlahKaki";
        echo PHP_EOL;
        echo "Keahlian = $this->keahlian";
        echo PHP_EOL;
        echo "Jenis Hewan = Elang";
        echo PHP_EOL;
        echo "Attack Power = $this->attackPower";
        echo PHP_EOL;
        echo "Defence Power = $this->defencePower";
    }
}

class Harimau
{
    use Hewan, Fight;

    public function __construct($nama)
    {
        $this->nama = $nama;
        $this->jumlahKaki = 4;
        $this->keahlian = "lari cepat";
        $this->attackPower = 7;
        $this->defencePower = 8;
    }

    public function getInfoHewan()
    {
        echo "----Informasi Hewan----";
        echo PHP_EOL;
        echo "Nama = $this->nama";
        echo PHP_EOL;
        echo "Darah = $this->darah";
        echo PHP_EOL;
        echo "Jumlah Kaki = $this->jumlahKaki";
        echo PHP_EOL;
        echo "Keahlian = $this->keahlian";
        echo PHP_EOL;
        echo "Jenis Hewan = Harimau";
        echo PHP_EOL;
        echo "Attack Power = $this->attackPower";
        echo PHP_EOL;
        echo "Defence Power = $this->defencePower";
    }
}


// Create objects from the child classes
$elang = new ELang("Elang Jawa");
$harimau = new Harimau("Harimau Sumatra");
echo $elang->atraksi();
echo PHP_EOL;
echo $elang->serang($harimau);
echo PHP_EOL;
echo $elang->getInfoHewan();
echo PHP_EOL;
echo PHP_EOL;
echo $harimau->atraksi();
echo PHP_EOL;
echo $harimau->serang($elang);
echo PHP_EOL;
echo $harimau->getInfoHewan();
