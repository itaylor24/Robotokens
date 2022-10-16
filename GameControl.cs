using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
using System.Diagnostics;

public class GameControl : MonoBehaviour
{
    //static string[] test_array = new string[7]{"walk(5)", "wait(5)", "run(5)", "turn(90)", "throw(10)","walk(5)", "throw(8)"};
    //string test_string = "walk(5),wait(5),run(5),turn(90),throw(10),walk(5),throw(5)";
    string test_string = "run(30),walk(10),wait(1),turn(30),throw(20)";
    public GameObject mech1;
    public GameObject mech2;
    [DllImport("__Internal")]
    private static extern void GameOver (int player);
    // Start is called before the first frame update
    Stopwatch game_clock;
    void Start()
    {
        UnityEngine.Debug.Log("Game Started");
        game_clock = new Stopwatch();
        game_clock.Start();
        
    }

    // Update is called once per frame
    void Update()
    {
        if(mech1.GetComponent<Interpret>().health <= 0.0f){
            EndGame(2);
            UnityEngine.Debug.Log("Mech 2 Wins");
        }
        if(mech2.GetComponent<Interpret>().health <= 0.0f){
            EndGame(1);
            UnityEngine.Debug.Log("Mech 1 Wins");
        }
        if(game_clock.Elapsed.Seconds >= 60){
            if(mech1.GetComponent<Interpret>().health < mech2.GetComponent<Interpret>().health){
                EndGame(2);

            }else if(mech1.GetComponent<Interpret>().health > mech2.GetComponent<Interpret>().health){
                EndGame(1);
            }else{
                Overtime();
            }
        }
    }


    public void EndGame (int winner) {
#if UNITY_WEBGL == true && UNITY_EDITOR == false
    GameOver (winner);
#endif
    }

    public void Overtime(){
        game_clock.Start();
        mech1.GetComponent<Interpret>().start_battle();
        mech2.GetComponent<Interpret>().start_battle();

    }

    public void StartMech1(string code){
        UnityEngine.Debug.Log("Starting Mech 1");
        string[] lines = code.Split(",");
        mech1.GetComponent<Interpret>().instructions = lines;
        mech1.GetComponent<Interpret>().start_battle();
        //Debug.Log("Starting Match");
    }

    public void StartMech2(string code){
        UnityEngine.Debug.Log("Starting Mech 2");
        string[] lines = code.Split(",");
        mech2.GetComponent<Interpret>().instructions = lines;
        mech2.GetComponent<Interpret>().start_battle();
        //Debug.Log("Starting Match");
    }

  public void test_match(){
    StartMech1(test_string);
    StartMech2(test_string);
  }
}

