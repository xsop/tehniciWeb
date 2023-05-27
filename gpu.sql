
DROP TYPE IF EXISTS branduri;
DROP TYPE IF EXISTS alimentare;

CREATE TYPE branduri AS ENUM('ASUS','GIGABYTE','Sapphire','MSI','altele');
CREATE TYPE alimentare AS ENUM('1x6', '1x6+1x8', '1x8', '2x8', '3x8', 'nu necesita');

CREATE TABLE IF NOT EXISTS gpu (
   id serial PRIMARY KEY,
   nume VARCHAR(50) UNIQUE NOT NULL,
   descriere TEXT,
   imagine VARCHAR(300),
   brand branduri DEFAULT 'altele',
   tip_alim alimentare DEFAULT 'nu necesita',
   pret NUMERIC (8,2) NOT NULL,
   ram INT NOT NULL CHECK (ram>=0),   
   data_adaugare TIMESTAMP DEFAULT current_timestamp,
   nr_vent INT NOT NULL CHECK (nr_vent>=0), 
   tehnologii VARCHAR [],
   pt_gaming BOOLEAN NOT NULL DEFAULT FALSE
);


INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('ASUS Radeon RX 6700 XT DUAL', 'combina performanta si simplitatea ca nimeni altul.', '6700xtasusdual.jpg', 'ASUS', '1x6+1x8', 2030, 12, 2, '{"Freesync"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('GIGABYTE GeForce RTX 4070 WINDFORCE OC', 'Ada Lovelace ', '4070gbwfoc.jpg', 'GIGABYTE', '1x8', 3469.99, 12, 3, '{"Freesync", "G-SYNC", "VR-Ready"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('Palit GeForce RTX 3060 Ti Dual LHR', 'NE6306T019P2-190AD', '3060tipalitdual.jpg', 'altele', '1x8', 2009.24, 8, 2, '{"Freesync", "G-SYNC"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('MSI GeForce RTX 3060 Ti GAMING X TRIO LHR', 'GAMING X TRIO LHR', '3060timsigamingxtrio.webp', 'MSI', '1x8', 3099.99, 8, 3, '{"Freesync", "G-SYNC"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('ASUS GeForce RTX 4070 Ti TUF GAMING', 'TUF-RTX4070TI-8G-GAMING', '4070tiasustuf.jpg', 'ASUS', '1x8', 5300, 8, 3, '{"Freesync", "G-SYNC", "VR-Ready"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('ASUS GeForce GT 710', 'GT710-SL-2GD5-BRK', '710asus.jpg', 'ASUS', 'nu necesita', 200, 2, 0, '{}', False);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('GIGABYTE GeForce GT 1030 Silent Low Profile 2G', 'GV-N1030SL-2GL', '1030gb.jpg', 'GIGABYTE', 'nu necesita', 349.99, 2, 0, '{}', False);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('Sapphire Radeon RX 7900 XTX Pulse', '11306-02-24G', '7900sapphire.jpg', 'Sapphire', '3x8', 5500, 24, 3, '{"Freesync", "VR-Ready"}', True);   

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('GIGABYTE GeForce RTX 4070 Ti AORUS MASTER', 'GV-N407TAORUS M-16GD', '4070tigbaorusmaster.png', 'GIGABYTE', '2x8', 6000, 16, 3, '{"Freesync", "G-SYNC", "VR-Ready"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('Sapphire Radeon RX 570 PULSE 8GB', '11266-66-20G', '570sapphire.jpg', 'Sapphire', '1x8', 800, 8, 2, '{"Freesync"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('GIGABYTE GeForce GTX 1650 D6', 'GV-N1656D6-4GD', '1650gb.jpg', 'GIGABYTE', '1x6', 1000, 4, 1, '{}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('Inno3D GeForce RTX 4070 X3 OC', 'N4070-03D6X-1710VA37L', '4070inno3d.jpg', 'altele', '1x8', 3600, 8, 3, '{"Freesync", "G-SYNC", "VR-Ready"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('Intel ARC A770 Limited Edition', 'DG2', 'arc770.jpg', 'altele', '1x6+1x8', 2800, 16, 2, '{}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('ASUS GeForce RTX 4080 TUF GAMING OC', 'TUF-RTX4080-O12G-GAMING', '4080asustuf.jpg', 'ASUS', '2x8', 8322.74, 16, 3, '{"Freesync", "VR-Ready"}', True);

INSERT INTO public.gpu(
nume, descriere, imagine, brand, tip_alim, pret, ram, nr_vent, tehnologii, pt_gaming)
VALUES ('ASUS Radeon RX 550 Phoenix EVO', 'PH-RX550-4G-EVO', '550asus.jpg', 'ASUS', 'nu necesita', 500, 4, 1, '{}', False);