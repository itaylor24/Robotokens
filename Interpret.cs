using System.Collections;
using System.Collections.Generic;
using System;
using UnityEngine;

public class Interpret : MonoBehaviour
{   
    public string[] instructions;
    public GameObject launcher;
    public GameObject explosion;
    public float health = 100;
    //string[] test_array = new string[7]{"walk(5)", "wait(5)", "run(5)", "turn(90)", "throw(20)","walk(5)", "throw(7)"};
    private int line_index = 0;
    private bool next_line;
    private bool execute_script;
    System.Diagnostics.Stopwatch watch = new System.Diagnostics.Stopwatch();

    private int start_time;
    private Vector3 start_pos;
    Quaternion target_rotation;

    float smooth = 5.0f;
    float t = 0f;

    private string curr_line;
    private float line_val;

    bool dead = false;

    Animator anim;
    // Start is called before the first frame update
    void Start()
    {
        anim = this.gameObject.GetComponent<Animator>();
        //instructions = test_array;

        
    }

    // Update is called once per frame
    void Update()
    {
        if(execute_script){
            execute();
        }   

        if(health <= 0 && !dead){
            Debug.Log("Die");
            die();
            dead = true;
        }
    }

    public void start_battle(){
        line_index = 0;
        next_line = true;
        execute_script = true;
        
    }

    void execute(){
        if(next_line){
            // watch.Start();
            // while(watch.ElapsedMilliseconds <500){
            //     int x =2; 
            // }
            start_pos = this.gameObject.transform.position;
            watch.Start();
            int index = instructions[line_index].LastIndexOf(')');
            next_line = false; 
            if(instructions[line_index].Substring(0,4) == "walk"){
                float val = float.Parse(instructions[line_index].Substring(5,index-5));
                curr_line = "move";
                line_val = val;
                if(line_index == 0 || instructions[line_index-1].Substring(0,4) == "wait"){
                   anim.Play("DefaultToWalk"); 
                }
                anim.Play("Walk");
            }
            else if(instructions[line_index].Substring(0,4) == "wait"){
                float val = float.Parse(instructions[line_index].Substring(5,index-5));
                curr_line = "wait";
                line_val = val;
                if(line_index > 0 && (instructions[line_index-1].Substring(0,4) == "walk" || instructions[line_index-1].Substring(0,4) == "run")){
                   anim.Play("WalkToDefault"); 
                }
                anim.Play("WalkInPlace");

            }
            else if(instructions[line_index].Substring(0,3) == "run"){
                float val = float.Parse(instructions[line_index].Substring(4,index-4));
                curr_line = "move";
                line_val = val;
                if(line_index > 0 && instructions[line_index-1].Substring(0,4) == "wait"){
                   anim.Play("DefaultToWalk"); 
                }
                anim.Play("Run");
            }
            else if(instructions[line_index].Substring(0,4) == "turn"){
                float val = float.Parse(instructions[line_index].Substring(5,index-5));
                curr_line = "turn";
                line_val = val;
                float tiltAroundY = transform.eulerAngles.y +  val; //Input.GetAxis("Vertical") *
                target_rotation = Quaternion.Euler(0, tiltAroundY, 0);
                anim.Play("WalkInPlace");
            } 
            else if(instructions[line_index].Substring(0,5) == "throw"){
                float val = float.Parse(instructions[line_index].Substring(6,index-6));
                curr_line = "throw";
                line_val = val;
                launcher.gameObject.GetComponent<Launch_Projectile>().shoot(this.gameObject.transform.position, this.gameObject.transform.rotation, val);
                next_line = true;
            }
            line_index += 1;
            if(line_index >= instructions.Length){
                next_line = false;
            }

        }

        if(curr_line == "move"){
            move(line_val);
        }else if(curr_line == "wait"){
            wait(line_val);
        }else if(curr_line == "turn"){
            turn(line_val);
        }
    }

    // void wake_up(){


    // }

    void move(float dist){
        if(Vector3.Distance(this.gameObject.transform.position, start_pos) >= dist){
            next_line = true;
            watch.Stop();
            anim.Play("WalkInPlace"); ///needs if statement
        }
    }

    void wait(float time){
        if(watch.ElapsedMilliseconds >= time*1000){
            next_line = true;
            watch.Stop();
            anim.Play("DefaultToWalk"); //needs if statement
            Debug.Log("Default to walk");
        }

    }

    void turn(float degrees){
        this.gameObject.transform.rotation = Quaternion.Slerp(this.gameObject.transform.rotation, target_rotation,  Time.deltaTime * smooth);
        t = Mathf.Lerp(t, 1f, Time.deltaTime * smooth);
        if(t >= .90f){
            next_line = true;
            watch.Stop();
        }
    }

    void die(){
        GameObject det = Instantiate(explosion);
        det.transform.position = this.gameObject.transform.position;
        det.GetComponent<Detonator>().Explode();
        det.GetComponent<Detonator>().Reset();
        this.gameObject.transform.position = new Vector3(-13.28f, -5.054f, 86.6f);
        //Destroy(this.gameObject);
        
    }

    // void throw_grenade(int dist){

    // }
}
