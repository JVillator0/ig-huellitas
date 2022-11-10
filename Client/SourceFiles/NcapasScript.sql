--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2

-- Started on 2022-04-07 01:15:01 UTC

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16481)
-- Name: User; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public."User" (
    userid integer NOT NULL,
    username character varying(25) NOT NULL,
    roleid integer NOT NULL,
    password character varying(50) NOT NULL,
    firstname character varying(25) NOT NULL,
    lastname character varying(25) NOT NULL,
    birthday date NOT NULL,
    gender character varying(25) NOT NULL
);


ALTER TABLE public."User" OWNER TO "ncapasProject";

--
-- TOC entry 223 (class 1259 OID 16480)
-- Name: User_userid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public."User" ALTER COLUMN userid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."User_userid_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 212 (class 1259 OID 16419)
-- Name: bed; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.bed (
    bedid integer NOT NULL,
    number integer NOT NULL,
    tenantid integer NOT NULL
);


ALTER TABLE public.bed OWNER TO "ncapasProject";

--
-- TOC entry 211 (class 1259 OID 16418)
-- Name: bed_bedid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.bed ALTER COLUMN bedid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.bed_bedid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 220 (class 1259 OID 16469)
-- Name: donation; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.donation (
    donationid integer NOT NULL,
    name character varying(50) NOT NULL,
    type character varying(25) NOT NULL,
    amout money NOT NULL,
    date date NOT NULL,
    notes character varying(350) NOT NULL
);


ALTER TABLE public.donation OWNER TO "ncapasProject";

--
-- TOC entry 219 (class 1259 OID 16468)
-- Name: donation_donationid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.donation ALTER COLUMN donationid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.donation_donationid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 214 (class 1259 OID 16431)
-- Name: medicine; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.medicine (
    medicineid integer NOT NULL,
    name character varying(50) NOT NULL,
    description character varying(250) NOT NULL,
    type character varying(50) NOT NULL,
    notes character varying(500) NOT NULL
);


ALTER TABLE public.medicine OWNER TO "ncapasProject";

--
-- TOC entry 213 (class 1259 OID 16430)
-- Name: medicine_medicineid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.medicine ALTER COLUMN medicineid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.medicine_medicineid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 222 (class 1259 OID 16475)
-- Name: role; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.role (
    roleid integer NOT NULL,
    name character varying(25) NOT NULL,
    description character varying(50) NOT NULL
);


ALTER TABLE public.role OWNER TO "ncapasProject";

--
-- TOC entry 221 (class 1259 OID 16474)
-- Name: role_roleid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.role ALTER COLUMN roleid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.role_roleid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 210 (class 1259 OID 16392)
-- Name: tenant; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.tenant (
    tenantid integer NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    birthday date NOT NULL,
    dui character varying(9) NOT NULL,
    gender character varying(10) NOT NULL,
    condition character varying(250) NOT NULL,
    status character varying(25) NOT NULL
);


ALTER TABLE public.tenant OWNER TO "ncapasProject";

--
-- TOC entry 209 (class 1259 OID 16391)
-- Name: tenant_tenantid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.tenant ALTER COLUMN tenantid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tenant_tenantid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16439)
-- Name: treatment; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.treatment (
    treatmentid integer NOT NULL,
    medicineid integer NOT NULL,
    dose integer NOT NULL,
    tenantid integer NOT NULL
);


ALTER TABLE public.treatment OWNER TO "ncapasProject";

--
-- TOC entry 226 (class 1259 OID 16493)
-- Name: treatment_given; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.treatment_given (
    treatment_givenid integer NOT NULL,
    date character varying(250) NOT NULL,
    treatmentid integer NOT NULL
);


ALTER TABLE public.treatment_given OWNER TO "ncapasProject";

--
-- TOC entry 225 (class 1259 OID 16492)
-- Name: treatment_given_treatment_givenid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.treatment_given ALTER COLUMN treatment_givenid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.treatment_given_treatment_givenid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 215 (class 1259 OID 16438)
-- Name: treatment_treatmentid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.treatment ALTER COLUMN treatmentid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.treatment_treatmentid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 218 (class 1259 OID 16457)
-- Name: visit; Type: TABLE; Schema: public; Owner: ncapasProject
--

CREATE TABLE public.visit (
    visitid integer NOT NULL,
    name character varying(50) NOT NULL,
    tenantid integer NOT NULL,
    dui character varying(9) NOT NULL,
    date date NOT NULL,
    note character varying(250) NOT NULL
);


ALTER TABLE public.visit OWNER TO "ncapasProject";

--
-- TOC entry 217 (class 1259 OID 16456)
-- Name: visit_visitid_seq; Type: SEQUENCE; Schema: public; Owner: ncapasProject
--

ALTER TABLE public.visit ALTER COLUMN visitid ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.visit_visitid_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3208 (class 2606 OID 16396)
-- Name: tenant pk_1; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.tenant
    ADD CONSTRAINT pk_1 PRIMARY KEY (tenantid);


--
-- TOC entry 3230 (class 2606 OID 16497)
-- Name: treatment_given pk_10; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.treatment_given
    ADD CONSTRAINT pk_10 PRIMARY KEY (treatment_givenid);


--
-- TOC entry 3211 (class 2606 OID 16423)
-- Name: bed pk_2; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.bed
    ADD CONSTRAINT pk_2 PRIMARY KEY (bedid);


--
-- TOC entry 3213 (class 2606 OID 16437)
-- Name: medicine pk_3; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.medicine
    ADD CONSTRAINT pk_3 PRIMARY KEY (medicineid);


--
-- TOC entry 3217 (class 2606 OID 16443)
-- Name: treatment pk_4; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.treatment
    ADD CONSTRAINT pk_4 PRIMARY KEY (treatmentid);


--
-- TOC entry 3220 (class 2606 OID 16461)
-- Name: visit pk_5; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.visit
    ADD CONSTRAINT pk_5 PRIMARY KEY (visitid);


--
-- TOC entry 3222 (class 2606 OID 16473)
-- Name: donation pk_7; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.donation
    ADD CONSTRAINT pk_7 PRIMARY KEY (donationid);


--
-- TOC entry 3224 (class 2606 OID 16479)
-- Name: role pk_8; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.role
    ADD CONSTRAINT pk_8 PRIMARY KEY (roleid);


--
-- TOC entry 3227 (class 2606 OID 16485)
-- Name: User pk_9; Type: CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT pk_9 PRIMARY KEY (userid);


--
-- TOC entry 3225 (class 1259 OID 16491)
-- Name: fk_10; Type: INDEX; Schema: public; Owner: ncapasProject
--

CREATE INDEX fk_10 ON public."User" USING btree (roleid);


--
-- TOC entry 3228 (class 1259 OID 16503)
-- Name: fk_12; Type: INDEX; Schema: public; Owner: ncapasProject
--

CREATE INDEX fk_12 ON public.treatment_given USING btree (treatmentid);


--
-- TOC entry 3209 (class 1259 OID 16429)
-- Name: fk_2; Type: INDEX; Schema: public; Owner: ncapasProject
--

CREATE INDEX fk_2 ON public.bed USING btree (tenantid);


--
-- TOC entry 3214 (class 1259 OID 16454)
-- Name: fk_5; Type: INDEX; Schema: public; Owner: ncapasProject
--

CREATE INDEX fk_5 ON public.treatment USING btree (tenantid);


--
-- TOC entry 3215 (class 1259 OID 16455)
-- Name: fk_6; Type: INDEX; Schema: public; Owner: ncapasProject
--

CREATE INDEX fk_6 ON public.treatment USING btree (medicineid);


--
-- TOC entry 3218 (class 1259 OID 16467)
-- Name: fk_8; Type: INDEX; Schema: public; Owner: ncapasProject
--

CREATE INDEX fk_8 ON public.visit USING btree (tenantid);


--
-- TOC entry 3231 (class 2606 OID 16424)
-- Name: bed fk_1; Type: FK CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.bed
    ADD CONSTRAINT fk_1 FOREIGN KEY (tenantid) REFERENCES public.tenant(tenantid);


--
-- TOC entry 3236 (class 2606 OID 16498)
-- Name: treatment_given fk_11; Type: FK CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.treatment_given
    ADD CONSTRAINT fk_11 FOREIGN KEY (treatmentid) REFERENCES public.treatment(treatmentid);


--
-- TOC entry 3232 (class 2606 OID 16444)
-- Name: treatment fk_3; Type: FK CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.treatment
    ADD CONSTRAINT fk_3 FOREIGN KEY (tenantid) REFERENCES public.tenant(tenantid);


--
-- TOC entry 3233 (class 2606 OID 16449)
-- Name: treatment fk_4; Type: FK CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.treatment
    ADD CONSTRAINT fk_4 FOREIGN KEY (medicineid) REFERENCES public.medicine(medicineid);


--
-- TOC entry 3234 (class 2606 OID 16462)
-- Name: visit fk_7; Type: FK CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public.visit
    ADD CONSTRAINT fk_7 FOREIGN KEY (tenantid) REFERENCES public.tenant(tenantid);


--
-- TOC entry 3235 (class 2606 OID 16486)
-- Name: User fk_9; Type: FK CONSTRAINT; Schema: public; Owner: ncapasProject
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT fk_9 FOREIGN KEY (roleid) REFERENCES public.role(roleid);


-- Completed on 2022-04-07 01:15:01 UTC

--
-- PostgreSQL database dump complete
--

